
import React from 'react'
import withAuth from '../hoc/withAuth'


class UserAccount extends React.Component {

  state = {
    username: '',
    motto: '',
    bio: '',
    password: ''
  }

  onInputChange = (e) => {
   this.setState({
     [e.target.name]: e.target.value
   })
  }

  onFormSubmit = (e) => {
   e.preventDefault()
   this.patchAccount(this.state.motto, this.state.bio)
 }

 patchAccount = (motto, bio) => {
   fetch(`http://localhost:3000/${this.props.match.url}`, {
     method: "PATCH",
     headers: {
        "Content-Type": "application/json"
     },
     body: JSON.stringify({
       motto: motto,
       bio: bio
     })
   }).then(res => res.json())
   .then(json => console.log(json))
 }

 fetchUserInfo = () => {
   fetch(`http://localhost:3000/${this.props.match.url}`)
   .then(res => res.json())
   .then(userJSON => {
     this.setState({
       username: userJSON.username,
       motto: userJSON.motto,
       bio: userJSON.bio,
       password: userJSON.passwordDigest
     })
   })
 }
  componentDidMount(){
    this.fetchUserInfo()
  }

  render(){
    return(
      <div>
        Hey {this.state.username}!<br/>
      Change your info!<br/>
    <form onSubmit={this.onFormSubmit}>
        <input name="motto" value={this.state.motto} onInput={this.onInputChange} placeholder="Your Motto"/><br/>
        <textarea name="bio" value={this.state.bio}  onInput={this.onInputChange} placeholder="Your Bio"/><br/>
        <button className="ui submit green">Edit Profile</button>
      </form>
      </div>
    )
  }

}


export default withAuth(UserAccount)
