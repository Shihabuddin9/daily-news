import TopAdds from "@/components/ui/Advertisement/TopAdds";
import MiddleSideNews from "@/components/ui/BdTopSideNews/MiddleSideNews";
import RightSideNews from "@/components/ui/BdTopSideNews/RightSideNews";
import { Box, Grid } from "@mui/material";


const HomePage = () => {
  return (
    <>
      <Box className="mx-8">
        <TopAdds></TopAdds>
        {/* bd top side news */}
        <Box>
          <Grid className="" container spacing={3}>
            <Grid item xs={6}>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla non hic eaque exercitationem nesciunt? Autem eaque sequi quaerat nemo odit, ullam saepe atque nisi veniam, eos, sed est! Et, aut!</p>
            </Grid>
            <Grid item xs={3}>
              <MiddleSideNews></MiddleSideNews>
            </Grid>
            <Grid item xs={3}>
              <RightSideNews></RightSideNews>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
