import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

const CompanyTabPanel: React.FC = () => {
  const [tab, setTab] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Box sx={{ flex: 1, borderTop: 1, borderColor: 'divider', background: '#fafafa', display: 'flex', flexDirection: 'column' }}>
      <Tabs value={tab} onChange={handleTabChange} centered>
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" />
      </Tabs>
      <Box sx={{ flex: 1, p: 3 }}>
        {tab === 0 && <Tab1 />}
        {tab === 1 && <Tab2 />}
        {tab === 2 && <Tab3 />}
      </Box>
    </Box>
  );
};

export default CompanyTabPanel;
