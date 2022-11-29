import getJobs from "@/api/getJobs";
import { FETCH_JOBS, RECEIVE_JOBS } from "@/store/constants";

const actions = {
  [FETCH_JOBS]: async (context) => {
    const jobListings = await getJobs();
    context.commit(RECEIVE_JOBS, jobListings); // RECEIVE_JOBS (state,jobListing)
  },
};

export default actions;
