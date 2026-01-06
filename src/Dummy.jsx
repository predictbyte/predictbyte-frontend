import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CheckCircle, Edit3, Plus, Trash2, Save, ArrowRight, Send, Layout } from 'lucide-react';

const DynamicPredictByte = () => {
  // 1. Form Configuration (Inhe aap edit kar sakte hain)
  const [formConfig, setFormConfig] = useState([
    { id: 1, label: "Full Name", type: "text", placeholder: "Enter your name", key: "name" },
    { id: 2, label: "Work Email", type: "email", placeholder: "name@company.com", key: "email" },
    { id: 3, label: "Service Needed", type: "select", options: ["SEO", "Web Dev", "PPC"], key: "service" }
  ]);

  // States
  const [step, setStep] = useState(0); // 0 = Admin/Setup, 1+ = Form Steps
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);

  // --- Admin Functions (Edit Form Structure) ---
  const addField = () => {
    const newId = Date.now();
    setFormConfig([...formConfig, { id: newId, label: "New Field", type: "text", placeholder: "Enter value", key: `key_${newId}` }]);
  };

  const removeField = (id) => {
    setFormConfig(formConfig.filter(f => f.id !== id));
  };

  const updateField = (id, updatedObj) => {
    setFormConfig(formConfig.map(f => f.id === id ? { ...f, ...updatedObj } : f));
  };

  // --- Form Logic ---
  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleFinalSubmit = () => {
    setSubmitted(true);
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="container py-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      
      {/* Toggle between Edit Mode and Preview Mode */}
      <div className="d-flex justify-content-center mb-4">
        <button className={`btn ${isAdmin ? 'btn-dark' : 'btn-outline-dark'} me-2`} onClick={() => {setIsAdmin(true); setStep(0)}}>
          <Layout size={18} className="me-2"/> Build Form (Edit)
        </button>
        <button className={`btn ${!isAdmin ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => {setIsAdmin(false); setStep(1)}}>
          View Live Website
        </button>
      </div>

      <div className="row justify-content-center">
        
        {/* LEFT SIDE: ADMIN PANEL (SIRF TAB DIKHEGA JAB BUILD MODE ON HO) */}
        {isAdmin && (
          <div className="col-lg-5">
            <div className="card shadow-sm border-0 p-4 rounded-4 mb-4">
              <h4 className="fw-bold mb-4">Customize Your Form</h4>
              {formConfig.map((field, index) => (
                <div key={field.id} className="p-3 border rounded-3 mb-3 bg-light">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="badge bg-secondary">Field {index + 1}</span>
                    <Trash2 size={18} className="text-danger cursor-pointer" onClick={() => removeField(field.id)} style={{cursor:'pointer'}}/>
                  </div>
                  <input 
                    className="form-control form-control-sm mb-2" 
                    placeholder="Field Label" 
                    value={field.label} 
                    onChange={(e) => updateField(field.id, { label: e.target.value })}
                  />
                  <select 
                    className="form-select form-select-sm mb-2"
                    value={field.type}
                    onChange={(e) => updateField(field.id, { type: e.target.value })}
                  >
                    <option value="text">Short Text</option>
                    <option value="email">Email</option>
                    <option value="select">Dropdown (Options)</option>
                  </select>
                </div>
              ))}
              <button className="btn btn-outline-primary w-100 fw-bold" onClick={addField}>
                <Plus size={18} /> Add New Field
              </button>
            </div>
          </div>
        )}

        {/* RIGHT SIDE: THE ACTUAL WEBSITE FORM */}
        <div className={isAdmin ? "col-lg-6" : "col-lg-6"}>
          <div className="card border-0 shadow-lg rounded-5 p-4 p-md-5">
            {!submitted ? (
              <>
                <div className="text-center mb-4">
                  <h2 className="fw-bold">PredictByte</h2>
                  <p className="text-muted">Step {step} of {formConfig.length + 1}</p>
                </div>

                {/* Progress Bar */}
                <div className="progress mb-4" style={{ height: '6px' }}>
                  <div className="progress-bar" style={{ width: `${(step / (formConfig.length + 1)) * 100}%` }}></div>
                </div>

                {/* Dynamic Steps based on Config */}
                {formConfig.map((field, index) => (
                  step === (index + 1) && (
                    <div key={field.id} className="animate-fadeIn">
                      <label className="form-label fw-bold h5 mb-3">{field.label}</label>
                      {field.type === 'select' ? (
                        <select 
                          className="form-select form-select-lg py-3 rounded-4 border-2"
                          onChange={(e) => handleInputChange(field.key, e.target.value)}
                        >
                          {field.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                      ) : (
                        <input 
                          type={field.type}
                          className="form-control form-control-lg py-3 rounded-4 border-2"
                          placeholder={field.placeholder}
                          onChange={(e) => handleInputChange(field.key, e.target.value)}
                        />
                      )}
                      <button className="btn btn-primary w-100 btn-lg rounded-4 mt-4 fw-bold" onClick={() => setStep(step + 1)}>
                        Next <ArrowRight size={20} className="ms-2"/>
                      </button>
                    </div>
                  )
                ))}

                {/* Final Step: Summary */}
                {step === (formConfig.length + 1) && (
                  <div>
                    <h5 className="fw-bold mb-4">Review Your Information</h5>
                    <div className="bg-light p-3 rounded-4 mb-4">
                      {formConfig.map(f => (
                        <div key={f.key} className="mb-2 d-flex justify-content-between border-bottom pb-2 pt-2">
                          <span className="text-muted">{f.label}:</span>
                          <span className="fw-bold">{formData[f.key] || 'Not filled'}</span>
                        </div>
                      ))}
                    </div>
                    <div className="d-flex gap-2">
                        <button className="btn btn-light btn-lg rounded-4 flex-grow-1" onClick={() => setStep(1)}>Edit All</button>
                        <button className="btn btn-success btn-lg rounded-4 flex-grow-1 fw-bold" onClick={handleFinalSubmit}>Submit <Send size={18} className="ms-2"/></button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-5">
                <CheckCircle size={70} className="text-success mb-3" />
                <h3 className="fw-bold">Thank You!</h3>
                <p className="text-muted">The form structure was dynamic and the data is captured.</p>
                <button className="btn btn-outline-primary rounded-pill px-4" onClick={() => {setSubmitted(false); setStep(1)}}>Restart</button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default DynamicPredictByte;