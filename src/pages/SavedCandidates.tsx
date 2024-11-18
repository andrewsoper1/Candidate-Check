import { useState, useEffect } from 'react';
import Candidate from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    try {
    const storedCandidates = localStorage.getItem('candidate');
    if (storedCandidates) {
      setCandidates(JSON.parse(storedCandidates));
      }
      } catch (error) {
        console.error("Failed to parse candidates from localStorage:", error);
    }
  }, []);

  const removeFromStorage = (id: string) => {
    const updatedCandidates = candidates.filter(candidate => candidate.id !== id);

    setCandidates(updatedCandidates);
    localStorage.setItem('candidate', JSON.stringify(updatedCandidates));
  }

  return (
    <>
      <h1>Potential Candidates</h1>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
        {candidates.map((candidate, index) => (
            <tr key={index}>
              <td><img src={candidate.avatar_url} alt={candidate.name} /></td>
              <td>{candidate.name}</td>
              <td>{candidate.location}</td>
              <td>{candidate.email}</td>
              <td>{candidate.company}</td>
              <td>{candidate.bio}</td>
              <td><button onClick={() => removeFromStorage(candidate.id)}><span>-</span></button></td>
              </tr>
              ))}
        </tbody>
      </table>

    </>
  );
};

export default SavedCandidates;
