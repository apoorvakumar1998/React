import UserClass from './UserClass';

const About = () => {
  return (
    <div className="about-container text-center border border-solid border-black p-4 m-4 mx-auto">
      <h1>About us</h1>
      <h2>This a swiggy clone app</h2>
      <UserClass name="virat kohli" />
    </div>

  )
}

export default About;