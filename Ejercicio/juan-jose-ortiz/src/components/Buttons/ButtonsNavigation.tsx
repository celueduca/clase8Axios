import "./ButtonsNavigation.css";
import { useHistory } from "react-router";

interface Props {
  setactualPage: any;
  actualPage: string;
  limitPages: number;
  pathName: string;
}

const ButtonsNavigation = ({
  pathName,
  actualPage,
  limitPages,
  setactualPage,
}: Props) => {
  const history = useHistory();

  const navigatePage = (toNavigate: number) => {
    const actualPageParse = parseInt(actualPage);
    console.log(actualPageParse)
    let nextPage = 1;
    if (toNavigate === 1) {
      if (actualPageParse < limitPages) {
        nextPage = actualPageParse + 1;
      }
    } else {
      console.log('aqui')
      if (actualPageParse > 1) {
        nextPage = actualPageParse - 1;
      }
    }
    setactualPage(nextPage.toString());
    history.push({
      pathname: `/${pathName}`,
      search: `?page=${nextPage}`,
    });
  };

  return (
    <div className="Container-Buttons">
      <button className="Buttons--Back" onClick={() => navigatePage(-1)}>
        <span>Go to Back</span>
        <i className="fas fa-arrow-left  mx-4"></i>
      </button>
      <button className="Buttons--Next" onClick={() => navigatePage(1)}>
        <span>Go to Next</span>
        <i className="fas fa-arrow-right mx-4"></i>{" "}
      </button>
    </div>
  );
};

export default ButtonsNavigation;
