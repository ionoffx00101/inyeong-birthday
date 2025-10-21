import { Route, Routes } from "react-router";
import ModCurrentInstall from "./pages/fallout76/guide/ModCurrentInstall.tsx";
import ModInstallGuide from "./pages/fallout76/guide/ModInstallGuide.tsx";
import GuideInitSetting from "./pages/fallout76/guide/GuideInitSetting.tsx";
import EventMischiefNight from "./pages/fallout76/collection/EventMischiefNight.tsx";
import EventSpookyScorched from "./pages/fallout76/collection/EventSpookyScorched.tsx";
import CorePage from "./pages/CorePage.tsx";
import CoreFallout76 from "./pages/fallout76/CoreFallout76.tsx";

const CoreRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<CorePage />} />
      <Route path="fallout-76">
        <Route index element={<CoreFallout76 />} />
        <Route path="mod">
          <Route path="current-install" element={<ModCurrentInstall />} />
          <Route path="install-guide" element={<ModInstallGuide />} />
        </Route>
        <Route path="guide" element={<GuideInitSetting />} />
        <Route path="collection">
          <Route path="mischief-night" element={<EventMischiefNight />} />
          <Route path="spooky-scorched" element={<EventSpookyScorched />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default CoreRouter;
