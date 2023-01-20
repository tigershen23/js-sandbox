import * as React from "react";

import "../styles/main.pcss";

import Card from "../components/Card/index";
import IntegrationsEmptyState from "../components/IntegrationsEmptyState/index";
import IntegrationsDisabledState from "../components/IntegrationsDisabledState/index";
import IntegrationsForm from "../components/IntegrationsForm/index";

import cardImage from "url:../../static/vitalik-vynarchyk-0PePaKnEmuM-unsplash.jpg";

export const App = () => (
  <div className="h-100 flex flex-col items-center bg-doorway-700 py-24">
    <IntegrationsEmptyState />

    <IntegrationsForm showCrmObjectId={false} />
    <IntegrationsForm showCrmObjectId />

    <IntegrationsDisabledState showCrmObjectId />
  </div>
);
