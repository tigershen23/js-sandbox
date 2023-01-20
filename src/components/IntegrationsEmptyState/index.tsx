import React from "react";
import noIntegrationsImage from "url:../../../static/no-integrations.png";
import WrenchIcon from "../common/icons/WrenchIcon";

export default function IntegrationsEmptyState() {
  return (
    <div className="mb-10 max-w-4xl rounded-md bg-gray-700 p-8">
      <h3 className="mb-2 text-2xl font-semibold text-white">Integrations</h3>
      <p className="mb-8 text-base text-white">
        Update your integration settings for this event. View your
        organization’s integration settings{" "}
        <span className="font-semibold text-purp-200">here</span>, or learn more
        about how integrations work on Welcome{" "}
        <span className="font-semibold text-purp-200">here</span>.
      </p>

      <div className="flex w-full flex-col items-center rounded-lg border border-white border-opacity-20 bg-black bg-opacity-10 p-10">
        <div className="mb-6 text-base font-semibold text-white">
          You haven't set up any integrations yet
        </div>
        <img
          className="mb-6 w-[300] rounded-2xl border border-white border-opacity-20 bg-black bg-opacity-20"
          src={noIntegrationsImage}
        />
        <div className="mb-6 text-center text-white text-opacity-80">
          Automatically sync Welcome data to your marketing automation
          <br />
          system — making it easier to qualify and convert leads.
        </div>

        <button className="flex items-center rounded-full bg-purp-500 py-3 px-4 text-sm font-semibold text-white">
          <WrenchIcon className="mr-1" />
          Configure your first integration
        </button>
      </div>
    </div>
  );
}
