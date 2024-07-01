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
        <Box className="mx-8 mt-2">
          <Grid className="" container spacing={3}>
            <Grid item xs={6}>
              <LeftsideNews></LeftsideNews>
            </Grid>
            <Grid item xs={3}>
              <MiddleSideNews></MiddleSideNews>
            </Grid>
            <Grid item xs={3}>
              <RightSideNews></RightSideNews>
            </Grid>
          </Grid>
        </Box>
        {/* for adds */}
        <MiddleAdds></MiddleAdds>
      </Box>
    </>
  );
};

export default HomePage;
