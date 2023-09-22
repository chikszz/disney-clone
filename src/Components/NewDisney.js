import styled from "styled-components";
import { Link } from "react-router-dom";

const NewDisney = (props) => {
    return (
        <Container>
            <h4>New to Disney+</h4>
            <Content>
                    <Wrap>
                        <Link to="/">
                        <img
                            src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/9945/1279945-h-2822103a78da"
                            alt=""
                            />
                        </Link>
                    </Wrap>
                    <Wrap>
                        <Link to="/">
                        <img
                            src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/old_images/MOVIE/674/1770000674/1770000674-h"
                            alt=""
                            />
                        </Link>
                    </Wrap>
                    <Wrap>
                        <Link to="/">
                        <img
                            src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/2352/1282352-h-23698d5e8f30"
                            alt=""
                            />
                        </Link>
                    </Wrap>
                    <Wrap>
                        <Link to="/">
                        <img
                            src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/4280/674280-h"
                            alt=""
                            />
                        </Link>
                    </Wrap>
            </Content>
        </Container>
    );
};

const Container = styled.div`
    padding: 0 0 26px;
`;

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default NewDisney;