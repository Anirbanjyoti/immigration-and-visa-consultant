import React from "react";

const Blog = () => {
  return (
    <div className="w-1/2 mx-auto my-40">
      <div
        tabIndex="0"
        class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-10"
      >
        <div class="collapse-title text-xl font-medium">
          Difference between authorization and authentication?
        </div>
        <div class="collapse-content">
          <p>
            <strong>Authentication: </strong>Authentication is a security system
            that first will check you are a user that is valid or not.<br></br>
            <strong>Authorization:</strong> Authorization is a security system
            that will check you have right or not to access to the component or
            any system.
          </p>
        </div>
      </div>
      <div
        tabIndex="0"
        class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-10"
      >
        <div class="collapse-title text-xl font-medium">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </div>
        <div class="collapse-content">
          <p>
            Firebase Authentication provides backend services, easy-to-use SDKs,
            and ready-made UI libraries to authenticate users to your app. You
            can use Firebase Authentication to allow users to sign in to your
            app using one or more sign-in methods, including email address and
            password sign-in, and federated identity providers such as Google
            Sign-in and Facebook Login.
          </p>
        </div>
      </div>
      <div
        tabIndex="0"
        class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div class="collapse-title text-xl font-medium">
          What other services does firebase provide other than authentication?
        </div>
        <div class="collapse-content">
          <p>
            There are many services which Firebase provides, Most useful of them
            are:
            <ul>
              <li>Cloud Firestore.</li>
              <li>Cloud Functions.</li>
              <li>Authentication.</li>
              <li>Hosting.</li>
              <li>Cloud Storage.</li>
              <li>Google Analytics.</li>
              <li>Predictions.</li>
              <li>Cloud Messaging.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
