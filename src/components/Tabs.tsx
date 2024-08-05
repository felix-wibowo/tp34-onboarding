import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
 
interface Props {
  data: { label: string; value: string; body: any }[];
}

export function TabsComponent({data} : Props) { 
  return (
    <Tabs value="html">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, body }) => (
          <TabPanel key={value} value={value}>
            {body}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}