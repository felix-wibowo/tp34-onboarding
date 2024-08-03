/* eslint-disable */
/* THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. */
import { a } from "@aws-amplify/data-schema";
import { configure } from "@aws-amplify/data-schema/internals";
import { secret } from "@aws-amplify/backend";

export const schema = configure({
    database: {
        engine: "postgresql",
        connectionUri: secret("SQL_CONNECTION_STRING"),
        sslCert: secret("SSL_CA_CERT")
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
        latitude: a.float().required(),
        longitude: a.float().required(),
        bicyclist: a.integer().required(),
        serious_injury: a.integer().required(),
        other_injury: a.integer().required(),
        non_injured: a.integer().required(),
        fatality: a.integer().required(),
        post_code: a.integer().required()
    }).identifier([
        "accident_no"
    ]),
    "bike_routes": a.model({
        id: a.integer().required(),
        geo_shape: a.json().required(),
        type: a.string().required(),
        latitude: a.float().required(),
        longitude: a.float().required(),
        direction: a.string().required()
    }).identifier([
        "id"
    ]),
    "post_codes": a.model({
        post_code: a.integer().required(),
        suburb_name: a.string().required(),
        boundary_geo_json: a.json()
    }).identifier([
        "post_code"
    ])
});
