import MiddleAdds from "@/components/ui/Advertisement/MiddleAdds";
import TopAdds from "@/components/ui/Advertisement/TopAdds";
import LeftsideNews from "@/components/ui/BdTopSideNews/LeftSideNews";
import MiddleSideNews from "@/components/ui/BdTopSideNews/MiddleSideNews";
import RightSideNews from "@/components/ui/BdTopSideNews/RightSideNews";
import { Box, Grid } from "@mui/material";


const HomePage = () => {
  return (
    <>
      <Box className="">
        {/* for adds */}
        <TopAdds></TopAdds>
        {/* bd top side news */}
        <Box className="lg:mx-8 mx-2 mt-2">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <LeftsideNews />
              </Grid>
              <Grid item xs={12} md={3}>
                <MiddleSideNews />
              </Grid>
              <Grid item xs={12} md={3}>
                <RightSideNews />
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* for adds */}
        <MiddleAdds></MiddleAdds>
      </Box>
    </>
  );
};

export default HomePage;
