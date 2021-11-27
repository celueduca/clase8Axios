import { useHistory } from "react-router-dom";

interface Props {
  setactualPage: any;
  actualPage: string;
  limitPages: number;
  pathName: string;
}

const Buttons = ({
  pathName,
  actualPage,
  limitPages,
  setactualPage,
}: Props) => {
  const history = useHistory();

  const selectPage = (toNavigate: number) => {
    const actualPageParse = parseInt(actualPage);
    console.log(actualPageParse);
    let nextPage = 1;
    if (toNavigate === 1) {
      if (actualPageParse < limitPages) {
        nextPage = actualPageParse + 1;
      }
    } else {
      console.log("aqui");
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
    <nav>
      <ul className="pagination justify-content-center  pagination-lg">
        <li className="page-item disabled">
          <button className="btn-lg button" onClick={() => selectPage(-1)}>
            <i className="fas fa-chevron-left"></i>
            <span className="hover-underline-animation"> back </span>
          </button>
        </li>

        <li className="page-item">
          <button className="button btn-lg" onClick={() => selectPage(1)}>
            <span className="hover-underline-animation"> Next </span>
            <i className="fas fa-chevron-right"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Buttons;
