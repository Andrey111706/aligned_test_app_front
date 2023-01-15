import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: min-content;
`;

const LinkItem = () => {
  return (
    <Container>
      <svg
        width="40"
        height="28"
        viewBox="0 0 40 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="27.2" rx="4" fill="#3485FF" />
      </svg>
      <svg
        style={{ position: "absolute", marginTop: "8px", marginLeft: "-6px" }}
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.0004 2.6052C11.6745 2.2726 11.2855 2.00837 10.8563 1.82799C10.427 1.6476 9.96602 1.55469 9.50038 1.55469C9.03474 1.55469 8.57378 1.6476 8.14451 1.82799C7.71523 2.00837 7.32626 2.2726 7.00038 2.6052L3.00038 6.6052C2.33734 7.26824 1.96484 8.16752 1.96484 9.1052C1.96484 10.0429 2.33734 10.9422 3.00038 11.6052C3.66342 12.2682 4.5627 12.6407 5.50038 12.6407C6.43806 12.6407 7.33734 12.2682 8.00038 11.6052L8.50038 11.1052"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        style={{ position: "absolute", marginLeft: "7px", marginTop: "3px" }}
        width="13"
        height="14"
        viewBox="0 0 13 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.20312 11.598C1.529 11.9306 1.91797 12.1949 2.34725 12.3752C2.77653 12.5556 3.23749 12.6485 3.70313 12.6485C4.16876 12.6485 4.62972 12.5556 5.059 12.3752C5.48828 12.1949 5.87725 11.9306 6.20313 11.598L10.2031 7.59803C10.8662 6.93499 11.2387 6.03572 11.2387 5.09803C11.2387 4.16035 10.8662 3.26108 10.2031 2.59803C9.54008 1.93499 8.64081 1.5625 7.70313 1.5625C6.76544 1.5625 5.86617 1.93499 5.20313 2.59803L4.70313 3.09803"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Container>
  );
};

export default LinkItem;
