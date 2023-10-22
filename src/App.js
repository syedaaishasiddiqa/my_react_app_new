import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import AnotherComponent from './AnotherComponent';
import awsExports from './aws-exports';
import './custom.css';
import { Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
Amplify.configure(awsExports);


function App({ signOut, user }) {
  return (   
    
    <div className="app-header">
      <h1 className="app-title text-center text-primary">Moxie IT Solutions </h1>
     <h2 className="heading"> About us</h2><p className="app-paragraph">MoxieIT is a global IT Consulting, Cloud Solutions and Outsourcing firm headquartered in Virginia,USA. 

We go to great lengths to find, attract, hire, motivate, manage, and retain America’s best software engineers and we offer them on demand to our clients at an affordable price and we handle all of the management, administration, infrastructure, development and training.

We consult, architect, build, secure and automate Cloud Solutions. Well versed in the design and implementation of Cloud-Native applications, we embrace the DevOps culture and expertly apply the full AWS feature set.</p>
      <Link to="/another-component"><button className="btn btn-secondary">Register with us</button></Link>

      <button className="btn btn-primary sign-out-button" onClick={signOut}>Sign out</button>
    <Routes><Route path="/another-component" element={<AnotherComponent />} />
    </Routes>
      </div>
      

     
  );
}

export default withAuthenticator(App);

