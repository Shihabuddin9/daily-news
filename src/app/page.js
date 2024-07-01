import LeftsideNews from "@/components/ui/BdTopSideNews/LeftsideNews";
import { Box, Grid } from "@mui/material";


const HomePage = () => {
  return (
    <>
      <Box className="mx-8">
        <Grid className="" container spacing={3}>
          <Grid item xs={6}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla non hic eaque exercitationem nesciunt? Autem eaque sequi quaerat nemo odit, ullam saepe atque nisi veniam, eos, sed est! Et, aut!</p>
          </Grid>
          <Grid item xs={3}>
            <LeftsideNews></LeftsideNews>
          </Grid>
          <Grid item xs={3}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla non hic eaque exercitationem nesciunt? Autem eaque sequi quaerat nemo odit, ullam saepe atque nisi veniam, eos, sed est! Et, aut!</p>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
