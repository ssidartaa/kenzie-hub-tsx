import Skeleton from "@mui/material/Skeleton";
import { Container, ContainerFull } from "./styles";

const LoadingPage = () => {
  return (
    <>
      <Container>
        <div className="nav">
          <Skeleton
            variant="rounded"
            width={100}
            height={30}
            sx={{ bgcolor: "grey.900" }}
          />
          <Skeleton
            variant="rounded"
            className="btn"
            sx={{ bgcolor: "grey.900" }}
          />
        </div>
      </Container>

      <ContainerFull>
        <Container className="header">
          <Skeleton
            variant="rounded"
            width={230}
            height={40}
            sx={{ bgcolor: "grey.900" }}
          />

          <Skeleton
            variant="rounded"
            width={200}
            height={40}
            sx={{ bgcolor: "grey.900" }}
          />
        </Container>
      </ContainerFull>

      <Container>
        <div className="techContainer">
          <Skeleton
            variant="rounded"
            width={100}
            height={30}
            sx={{ bgcolor: "grey.900" }}
          />

          <Skeleton
            variant="rounded"
            width={35}
            height={35}
            sx={{ bgcolor: "grey.900" }}
          />
        </div>

        <Skeleton
          className="list"
          variant="rounded"
          height={432}
          sx={{ bgcolor: "grey.900" }}
        />
      </Container>
    </>
  );
};

export default LoadingPage;
