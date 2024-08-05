import { TabsComponent } from '@/components/Tabs';
import { useEffect, useState } from 'react';
import ClickableCard from '@/components/ClickableCard';
import { v4 as uuidv4 } from 'uuid';
import { DialogWithTable } from '@/components/DialogWithTable';

interface Props {
  directionSteps: google.maps.DirectionsStep[];
  accidents: any;
}

const RISK_LEVEL = {
  FATAL: "fatal",
  SERIOUS: "serious",
  MINOR: "minor"
};

export function RouteDetails({directionSteps, accidents}: Props) {
  const [fatality, setFatality] = useState<any>({});
  const [serious_injury, setSeriousInjury] = useState<any>({});
  const [other_injury, setOtherInjury] = useState<any>({});
  const [open, setOpen] = useState<boolean>(false);
  const [selectedAccidents, setSelectedAccidents] = useState<any>([]);

  useEffect(() => {
    try {
      const { fatality, other_injury, serious_injury } = accidents;
      
      setFatality(fatality);
      setOtherInjury(other_injury);
      setSeriousInjury(serious_injury);
      console.log("Accidents set")
    } catch (err) {
      console.error("Error ", err)
    }
  }, [accidents]);

  const getStepTabContent = () => {
    return (
      <>
        {
          directionSteps.map((step) => {
            return (
              <ClickableCard key={uuidv4()} onClickHandler={() => {}} title={`${step.duration?.text}`} body={step.instructions} />
            );
          })
        }
      </>
    );
  }

  const handleAccidentCardClick = (type: string) => {
    switch (type) {
      case RISK_LEVEL.FATAL:
        setSelectedAccidents(fatality.accidents)
        break;
      case RISK_LEVEL.SERIOUS:
        setSelectedAccidents(serious_injury.accidents)
        break;
      case RISK_LEVEL.MINOR:
        setSelectedAccidents(other_injury.accidents)
        break;
    }
    setOpen(true);
  }

  const getPastAccidentsContent = () => {
    return (
      <>
        <DialogWithTable open={open} setOpen={setOpen} data={selectedAccidents}/>
        <ClickableCard onClickHandler={() => {handleAccidentCardClick(RISK_LEVEL.FATAL)}} title={`Fatal accidents`} body={`<strong>${fatality.accidents.length}</strong> accidents`} />
        <ClickableCard onClickHandler={() => {handleAccidentCardClick(RISK_LEVEL.SERIOUS)}} title={`Serious accidents`} body={`<strong>${serious_injury.accidents.length}</strong> accidents`} />
        <ClickableCard onClickHandler={() => {handleAccidentCardClick(RISK_LEVEL.MINOR)}} title={`Minor accidents`} body={`<strong>${other_injury.accidents.length}</strong> accidents`} />
      </>
    );
  };

  return (
    <div className='flex-grow overflow-y-auto'>
      <hr />
        {
          directionSteps.length == 0 || 
          <>
            <div className="flex-1 text-center w-full my-2">
              <h2 className="font-sans text-3xl tracking-tight leading-10 font-extrabold sm:text-2xl text-white sm:leading-none md:text-3xl">
                <span className="text-orange-400">Route Details</span>
              </h2>
            </div>

            <hr />
            <TabsComponent data={[
                {
                  label: "Directions",
                  value: "directions",
                  body: getStepTabContent(),
                },
                {
                  label: "Past Accidents",
                  value: "past_accidents",
                  body: getPastAccidentsContent(),
              }]}/>
          </>
        }
    </div>
  );
}