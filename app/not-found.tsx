import { Back } from "./components/atoms/back";
import { BaseText } from "./components/atoms/base-text";
import { Title, TitleType } from "./components/atoms/title";

const NotFound = () => {
  return (
    <div className="container" style={{ minHeight: "100svh" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          width: "100%",
        }}
      >
        <Title variant={TitleType.H2}>404</Title>
        <BaseText type="xl">Страница не найдена</BaseText>
        <Back />
      </div>
    </div>
  );
};

export default NotFound;
