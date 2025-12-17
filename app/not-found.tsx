import { BackButton } from "./components/atoms/back-button";
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
        <Title type={TitleType.H2}>404</Title>
        <BaseText type="xl">Страница не найдена</BaseText>
        <BackButton />
      </div>
    </div>
  );
};

export default NotFound;
