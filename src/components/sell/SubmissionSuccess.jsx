
import { Link } from "react-router-dom";

function SubmissionSuccess() {
  return (
    <div className="submission-success">
      <div className="success-icon">✓</div>

      <span className="sell-eyebrow">PROPERTY SUBMISSION</span>

      <h1>Your property details have been submitted!</h1>

      <p>
        Thank you for choosing NIDHI properties. Your property submission
        has been captured successfully in this frontend demo.
      </p>

      <div className="success-info">
        <strong>What's next?</strong>
        <p>
          Once backend integration is complete, your property
          can be saved, reviewed and published for buyers.
        </p>
      </div>

      <Link to="/" className="next-button success-home">
        Back to Home →
      </Link>
    </div>
  );
}

export default SubmissionSuccess;
