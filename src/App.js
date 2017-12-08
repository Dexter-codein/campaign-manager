import React, { Component } from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Campaign from "./components/pages/Campaign";

class App extends Component {
  state = {
    data: [
      {
        capture_rate: 39.416642247899325,
        created_at: "2017-02-10T17:03:46.809+01:00",
        days: 14,
        end_date: "2017-04-19",
        goal: null,
        id: "3565663e-2700-4fc3-b089-81bd3e9a31e5",
        interaction_rate: 24.50021096622531,
        lead_conversion_amount: 3530,
        lead_conversion_value_cents: 1087500,
        sales_conversion_amount: 3071,
        sales_conversion_value_cents: 130600,
        start_date: "2017-03-27",
        title: "A campaign with an uncommonly long name",
        updated_at: "2017-02-14T11:49:17.972+01:00",
        interactions: 21573,
        reach: 222643,
        views: 87808
      },
      {
        capture_rate: 38.986135064300164,
        created_at: "2017-01-24T18:08:41.086+01:00",
        days: 8,
        end_date: "2017-02-09",
        goal: "consideration",
        id: "e804a934-6ba5-42d5-8e10-45bf654984b5",
        interaction_rate: 25.772405865756383,
        lead_conversion_amount: 76,
        lead_conversion_value_cents: 25700,
        sales_conversion_amount: 454,
        sales_conversion_value_cents: 4100,
        start_date: "2017-01-27",
        title: "Roadshow Berlin",
        updated_at: "2017-02-14T11:44:35.685+01:00",
        interactions: 13091,
        reach: 129840,
        views: 50651
      },
      {
        capture_rate: 40.66999079127642,
        created_at: "2017-01-24T18:07:25.180+01:00",
        days: 10,
        end_date: "2017-02-28",
        goal: "consideration",
        id: "ae827af0-607f-4214-baa2-e344672d6ec5",
        interaction_rate: 24.586497307745407,
        lead_conversion_amount: 22921,
        lead_conversion_value_cents: 1092700,
        sales_conversion_amount: 12872,
        sales_conversion_value_cents: 3759900,
        start_date: "2017-02-14",
        title: "Roadshow Munich",
        updated_at: "2017-02-07T15:25:07.609+01:00",
        interactions: 15746,
        reach: 157012,
        views: 63894
      },
      {
        capture_rate: null,
        created_at: "2017-02-07T15:03:47.849+01:00",
        days: 3,
        end_date: "2017-04-29",
        goal: "awareness",
        id: "8d4648b9-b576-4143-a9be-731252bd71e6",
        interaction_rate: null,
        lead_conversion_amount: null,
        lead_conversion_value_cents: null,
        sales_conversion_amount: null,
        sales_conversion_value_cents: null,
        start_date: "2017-04-27",
        title: "Zoo",
        updated_at: "2017-02-14T11:40:48.282+01:00",
        interactions: null,
        reach: null,
        views: null
      },
      {
        goal: "consideration",
        created_at: "2017-05-15T14:21:59.333+02:00",
        days: 13,
        end_date: "2017-09-20",
        id: "62c5e3ee-a66f-4092-b3dd-e13e35219d8a",
        lead_conversion_amount: 123635,
        lead_conversion_value_cents: 2528000,
        sales_conversion_amount: 246638,
        sales_conversion_value_cents: 3391600,
        start_date: "2017-08-21",
        title: "At the sea",
        updated_at: "2017-11-20T11:34:57.126+01:00",
        capture_rate: 0.2695391434717424,
        conversion_rate: 368.4308457711443,
        interaction_rate: 0.13784764207980654,
        reach: 27040,
        views: 7289,
        interactions: 1005
      },
      {
        goal: "awareness",
        created_at: "2017-10-02T16:56:22.395+02:00",
        days: 1,
        end_date: "2017-05-27",
        id: "37aeb016-cb8e-4170-a89b-7cfd0b5d67c3",
        lead_conversion_amount: 0,
        lead_conversion_value_cents: 0,
        sales_conversion_amount: 0,
        sales_conversion_value_cents: 0,
        start_date: "2017-05-27",
        title: "Retailer",
        updated_at: "2017-10-05T17:36:38.971+02:00",
        capture_rate: 0.3740557553956835,
        conversion_rate: 0,
        interaction_rate: 0.3222743118163241,
        reach: 39200,
        views: 14663,
        interactions: 4726
      },
      {
        goal: "consideration",
        created_at: "2017-03-31T14:16:37.633+02:00",
        days: 0,
        end_date: null,
        id: "e4dfe289-4b4f-4385-bd4c-e3d14d15ec85",
        lead_conversion_amount: 0,
        lead_conversion_value_cents: 0,
        sales_conversion_amount: 0,
        sales_conversion_value_cents: 0,
        start_date: null,
        title: "New Nike",
        updated_at: "2017-11-13T15:28:43.084+01:00",
        capture_rate: 0,
        conversion_rate: 0,
        interaction_rate: 0,
        lead_conversion_rate: 0,
        reach: 0,
        views: 0,
        interactions: 0
      },
      {
        goal: "consideration",
        created_at: "2017-03-24T11:15:46.822+01:00",
        days: 0,
        end_date: null,
        id: "c6d50b37-2348-440c-94dd-b05ff27d9889",
        lead_conversion_amount: 0,
        lead_conversion_value_cents: 0,
        sales_conversion_amount: 0,
        sales_conversion_value_cents: 0,
        start_date: null,
        title: "My awesome campaign",
        updated_at: "2017-11-13T15:18:04.384+01:00",
        capture_rate: 0,
        conversion_rate: 0,
        interaction_rate: 0,
        reach: 0,
        views: 0,
        interactions: 0
      },
      {
        goal: "awareness",
        created_at: "2017-07-05T12:16:50.487+02:00",
        days: 8,
        end_date: "2017-04-29",
        id: "4134152e-955c-45c6-b3b4-dd86d017da33",
        lead_conversion_amount: 474,
        lead_conversion_value_cents: 26300,
        sales_conversion_amount: 83,
        sales_conversion_value_cents: 99200,
        start_date: "2017-04-15",
        title: "Springfield",
        updated_at: "2017-08-25T09:21:20.519+02:00",
        capture_rate: 0.382674266714167,
        conversion_rate: 0.04762311901504788,
        interaction_rate: 0.2573700543056633,
        reach: 118743,
        views: 45440,
        interactions: 11696
      },
      {
        goal: "awareness",
        created_at: "2017-01-24T18:07:25.180+01:00",
        days: 20,
        end_date: "2017-02-28",
        id: "ae827af0-607f-4214-baa2-e344672d6ec5",
        lead_conversion_amount: 34921,
        lead_conversion_value_cents: 1125600,
        sales_conversion_amount: 12884,
        sales_conversion_value_cents: 3792700,
        start_date: "2017-02-05",
        title: "New Product Launch",
        updated_at: "2017-08-29T15:11:13.820+02:00",
        capture_rate: 0.40628703985912157,
        conversion_rate: 2.2759950485621787,
        interaction_rate: 0.24830690366542332,
        reach: 208190,
        views: 84586,
        interactions: 21004
      }
    ]
  };
  updateData = newData => this.setState({ data: newData });
  render() {
    return (
      <div>
        <Route
          path="/"
          exact
          component={props => (
            <HomePage
              {...props}
              data={this.state.data}
              updateData={this.updateData}
            />
          )}
        />
        <Route
          path="/campaign/:id"
          exact
          component={props => (
            <Campaign
              {...props}
              data={this.state.data}
              updateData={this.updateData}
            />
          )}
        />
      </div>
    );
  }
}
export default App;
