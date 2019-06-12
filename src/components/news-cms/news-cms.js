import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

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
`

const News = () => (
  <StaticQuery
    query={graphql`
      query {
        news {
          newsDatas {
            id
            content
            date
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
            </RowStyle>
          </NewsWrapper>
        ))}
      </>
    )}
  />
)

export default News
