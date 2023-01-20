import React from "react";
import WrenchIcon from "../common/icons/WrenchIcon";

export default function IntegrationsDisabledState() {
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
          Integrations are disabled
        </div>
        <div className="mb-6 text-center text-white text-opacity-80">
          You have integrations configured, but all of them have been disabled.
          <br />
          Enable one of them in your org dashboard before making event-level
          changes.
        </div>

        <button className="flex items-center rounded-full bg-purp-500 py-3 px-4 text-sm font-semibold text-white">
          Visit org dashboard
        </button>
      </div>
    </div>
  );
}
