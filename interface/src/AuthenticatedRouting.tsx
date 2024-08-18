import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import CustomEntities from 'app/main/CustomEntities';
import Customizations from 'app/main/Customizations';
import Devices from 'app/main/Devices';
import Help from 'app/main/Help';
import Modules from 'app/main/Modules';
import Scheduler from 'app/main/Scheduler';
import Sensors from 'app/main/Sensors';
import APSettings from 'app/settings/APSettings';
import ApplicationSettings from 'app/settings/ApplicationSettings';
import DownloadUpload from 'app/settings/DownloadUpload';
import MqttSettings from 'app/settings/MqttSettings';
import NTPSettings from 'app/settings/NTPSettings';
import Settings from 'app/settings/Settings';
import Network from 'app/settings/network/Network';
import Security from 'app/settings/security/Security';
import APStatus from 'app/status/APStatus';
import Activity from 'app/status/Activity';
import HardwareStatus from 'app/status/HardwareStatus';
import MqttStatus from 'app/status/MqttStatus';
import NTPStatus from 'app/status/NTPStatus';
import NetworkStatus from 'app/status/NetworkStatus';
import Status from 'app/status/Status';
import SystemLog from 'app/status/SystemLog';
import { Layout } from 'components';
import { AuthenticatedContext } from 'contexts/authentication';

const AuthenticatedRouting = () => {
  const { me } = useContext(AuthenticatedContext);
  return (
    <Layout>
      <Routes>
        <Route path="/devices/*" element={<Devices />} />
        <Route path="/sensors/*" element={<Sensors />} />
        <Route path="/status/*" element={<Status />} />
        <Route path="/help/*" element={<Help />} />
        <Route path="/*" element={<Navigate to="/" />} />

        <Route path="/status/hardwarestatus/*" element={<HardwareStatus />} />
        <Route path="/status/activity" element={<Activity />} />
        <Route path="/status/log" element={<SystemLog />} />
        <Route path="/status/mqtt" element={<MqttStatus />} />
        <Route path="/status/ntp" element={<NTPStatus />} />
        <Route path="/status/ap" element={<APStatus />} />
        <Route path="/status/network" element={<NetworkStatus />} />

        {me.admin && (
          <>
            <Route path="/settings" element={<Settings />} />
            <Route path="/settings/application" element={<ApplicationSettings />} />
            <Route path="/settings/mqtt" element={<MqttSettings />} />
            <Route path="/settings/ntp" element={<NTPSettings />} />
            <Route path="/settings/ap" element={<APSettings />} />
            <Route path="/settings/modules" element={<Modules />} />
            <Route path="/settings/upload" element={<DownloadUpload />} />

            <Route path="/settings/network/*" element={<Network />} />
            <Route path="/settings/security/*" element={<Security />} />

            <Route path="/customizations" element={<Customizations />} />
            <Route path="/scheduler" element={<Scheduler />} />
            <Route path="/customentities" element={<CustomEntities />} />
          </>
        )}
      </Routes>
    </Layout>
  );
};

export default AuthenticatedRouting;
