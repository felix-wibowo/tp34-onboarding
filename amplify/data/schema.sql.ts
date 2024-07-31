/* eslint-disable */
/* THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. */
import { a } from "@aws-amplify/data-schema";
import { configure } from "@aws-amplify/data-schema/internals";
import { secret } from "@aws-amplify/backend";

export const schema = configure({
    database: {
        identifier: "IDBlgdO63hnpWdUqdUyy3rA",
        engine: "postgresql",
        connectionUri: secret("SQL_CONNECTION_STRING"),
        vpcConfig: {
            vpcId: "vpc-0d8d63bcc5fe73329",
            securityGroupIds: [
                "sg-0c38a232136f317d5"
            ],
            subnetAvailabilityZones: [
                {
                    subnetId: "subnet-013f171fc59b57157",
                    availabilityZone: "ap-southeast-2b"
                },
                {
                    subnetId: "subnet-032acfe7a22cbeff2",
                    availabilityZone: "ap-southeast-2a"
                },
                {
                    subnetId: "subnet-0dd81f7d867f53d0f",
                    availabilityZone: "ap-southeast-2c"
                }
            ]
        }
    }
}).schema({
    "accidents": a.model({
        accident_no: a.string().required(),
        accident_datetime: a.datetime().required(),
        accident_type: a.string().required(),
        severity: a.string().required(),
        speed_zone: a.string().required(),
        road_name: a.string().required(),
        road_type: a.string().required(),
        lga_name: a.string().required(),
        latitude: a.float().required(),
        longitude: a.float().required(),
        vicgrid_x: a.float().required(),
        vicgrid_y: a.float().required(),
        bicyclist: a.integer().required(),
        serious_injury: a.integer().required(),
        other_injury: a.integer().required(),
        non_injured: a.integer().required(),
        fatality: a.integer().required()
    }).identifier([
        "accident_no"
    ]),
    "bike_routes": a.model({
        id: a.integer().required(),
        geo_shape: a.json().required(),
        type: a.string().required(),
        latitude: a.float().required(),
        longitude: a.float().required()
    }).identifier([
        "id"
    ])
});
