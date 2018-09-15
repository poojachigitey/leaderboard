var REFERRAL_URL = 'https://refer-api.sentinelgroup.io/leaderboard';

constructor(props){
	super(props);
	this.state = {
   
    data:[],

   
  };
}
 
  componentWillMount() {
    let url = REFERRAL_URL + '/vars';
    fetch(url)
    .then((resp) => resp.json())
    .then((body) => this.setState({
      loading: false,
      data: body,
    }));
  }

  export default ;
