import React from "react";
import Switch from "../common/Switch";

export default function IntegrationsForm({
  showCrmObjectId,
}: {
  showCrmObjectId: boolean;
}) {
  return (
    <div className="mb-8 max-w-4xl rounded-md bg-gray-700 p-8">
      <h3 className="mb-2 text-2xl font-semibold text-white">Integrations</h3>
      <p className="mb-8 text-base text-white">
        Update your integration settings for this event. View your
        organization’s integration settings{" "}
        <span className="font-semibold text-purp-200">here</span>, or learn more
        about how integrations work on Welcome{" "}
        <span className="font-semibold text-purp-200">here</span>.
      </p>

      <div className="my-8 border-t border-white border-opacity-20"></div>

      <div className="flex items-center justify-between">
        <div className="mr-4">
          <div className="font-semibold text-white">
            Sync from Welcome to external platforms
          </div>
          <div className="text-white">
            Salesforce has been enabled for your organization, toggle this
            option off if you don't want to sync out for this event
          </div>
        </div>

        <Switch />
      </div>

      {showCrmObjectId && (
        <>
          <div className="my-8 border-t border-white border-opacity-20"></div>
          <div className="mt-8 flex flex-col">
            <div className="font-semibold text-white">
              Target Marketo Program ID
            </div>
            <div className="mb-4 text-white">
              Defaults to your organization's template Program ID. If you want
              to use a different Program ID, you may change it below.
            </div>

            <TextInput label="Target Marketo Program ID" placeholder="123456" />
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="h-11 rounded-md bg-purp-500 px-4 text-sm font-semibold uppercase text-white hover:bg-purp-600"
            >
              Save
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function TextInput({
  placeholder,
  label,
  value,
}: {
  placeholder: string;
  label: string;
  value?: string;
}) {
  return (
    <label className="relative h-14 w-full rounded-md bg-white/5">
      <span className="absolute top-2 left-4 text-xs text-white/60">
        {label}
      </span>
      <input
        placeholder={placeholder}
        type="text"
        className="absolute left-4 bottom-1 w-full border-0 bg-transparent text-lg text-white outline-0 placeholder:text-white/40"
      />
    </label>
  );
}
