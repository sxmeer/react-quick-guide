import React, { useEffect, useState } from 'react';
import List from './List';

// class Parent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoading: true,
//       list: [],
//       error: null
//     }
//   }

//   render() {
//     return <div>This is parent
//       <List
//         isLoading={this.state.isLoading}
//         list={this.state.list}
//         error={this.state.error} />
//     </div>;
//   }

//   componentDidMount() {
//     fetch('https://animechan.vercel.app/api/quotes')
//       .then(data => data.json())
//       .then(list => {
//         setTimeout(() => {
//           this.setState({ list, isLoading: false })
//         }, 1000);
//       })
//       .catch(error => this.setState({ error }))
//   }
// }


function Parent(props) {
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://animechan.vercel.app/api/quotes')
      .then(data => data.json())
      .then(list => {
        setTimeout(() => {
          setList(list);
          setLoading(false);
        }, 1000);
      })
      .catch(error => setError(error));
  }, [])

  return <div>This is parent
    <List
      isLoading={isLoading}
      list={list}
      error={error} />
  </div>;
}

export default Parent;