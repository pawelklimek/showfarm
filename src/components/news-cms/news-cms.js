import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import contactImage from "../../images/contact/contact-1.jpg";

const NewsWrapper = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const RowStyle = styled.div`
  margin: 10px;
  font-family: "Montserrat", serif;
  font-weight: ${({ theme }) => theme.font.thin};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};
`;

const ImageStyle = styled.div`
  background: url(${({img}) => img}) no-repeat center;
  width: 100px;
  height: 100px;
`;

const News = () => (
  <StaticQuery
    query={graphql`
      query {
        news {
          newsDatas {
            id
            content
            date
             photo {
                url
            }
          } 
        }
      }
    `}
    render={({ news: { newsDatas } }) => (
      <>
        {newsDatas.map(newData => (
          <NewsWrapper>
            <RowStyle key={newData.id}>
              <p>{newData.date}</p>
              <p>{newData.content}</p>
                <ImageStyle img={newData.photo ? newData.photo.url : undefined}/>
            </RowStyle>
          </NewsWrapper>
        ))}
      </>
    )}
  />
)

export default News
