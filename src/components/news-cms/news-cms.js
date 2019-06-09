import React from "react"
import {graphql, StaticQuery} from "gatsby";


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
        render={({news: {newsDatas}}) => (
            <div>
                {newsDatas.map(newData =>
                    (
                        <div key={newData.id}>
                            <p>{newData.content}</p>
                            <p>{newData.date}</p>
                        </div>
                    )
                )}
            </div>
        )}
/>);

export default News;
