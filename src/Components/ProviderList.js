import React, { useEffect, useState } from 'react';
import { getProviders } from '../api';

export default function ProviderList({ onSelect }) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    getProviders().then(res => setProviders(res.data));
  }, []);

  return (
    <div className="provider-list">
      <h2>All Providers</h2>
      {providers.map(p => (
        <div key={p._id} className="provider-item" onClick={()=>onSelect(p)}>
          <h3>{p.name}</h3>
          <p>{p.specialization}</p>
        </div>
      ))}
      <style jsx>{`
        .provider-list { max-width: 600px; margin: auto; }
        .provider-item { padding: 12px; border: 1px solid #ddd; margin:8px 0; cursor:pointer; border-radius:6px; transition:0.2s; }
        .provider-item:hover { background:#f0f0f0; }
      `}</style>
    </div>
  );
}
