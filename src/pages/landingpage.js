import React, { useState } from 'react';
import '../info/Info.css';
import { Button } from 'react-bootstrap';
import { Download } from 'lucide-react';
import businessplan from '../images copy/graph.png';
const FileUploadDownload = () => {
  const [hasDownloaded, setHasDownloaded] = useState(false);
  
  // Create PDF content from your document
  const pdfContent = `Holistic Medicine Business Action Plan

• Optimize your website to make it easy for the user to book with you.
• Embed relevant Keywords into your Website
  ○ If you are a local business, add your city at the end of your keywords
• Make sure to write a meta description in the website that has 140-160 characters maximum.
• Embed Google Tag Manager, Google Search Console & Google Analytics into your site for real-time analytics
• Optimize your site for topics > keywords
• Create educational content, make your blogs around the keywords and embed videos into the blogs

Social Media Best Practices:
- Use 3-5 MAX Hashtags on platforms
- Use 1-2 general hashtags like #holistichealth and #[your modality]
- Tell the audience what the video will be about in the first 8 seconds
- Embed VidIQ into your YouTube channel
- Use your analytics on each platform to make decisions
- Put your website booking page in the first line of the description
- Use this strategy: Educate → CTA → Book consultation

Platform Recommendations by Modality:
• Health Coaches: YouTube or LinkedIn groups
• Acupuncture: Instagram or Facebook  
• Chiropractic: Facebook, YouTube, Instagram
• Nutrition: YouTube, Instagram
• Stem Cell Therapy: YouTube, Facebook
• Hypnotherapy: TikTok, YouTube, Instagram
• Dieticians/Ayurveda: YouTube or Instagram

Visit https://themerlingroupworld.com/telehealth for personalized plans.`;

  // Handle PDF download
  const handleDownload = () => {
    // Create a blob with the PDF content (in a real app, you'd serve the actual PDF file)
    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Holistic-Medicine-Business-Action-Plan.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    setHasDownloaded(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="bg-white rounded-xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🌿 Holistic Medicine Business Action Plan
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Proven Strategies to Grow Your Practice & Attract More Patients
          </p>
        </div>
        <img src={businessplan} className="gridimag" alt="quote" />
        <div className="bg-gray-50 rounded-lg p-6 mb-8 text-center">
        
          <p className="text-sm text-gray-500 mt-4">
            Comprehensive Holistic Medicine Action Plan to increase conversion rates.
          </p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-6 text-white mb-6">
          {!hasDownloaded ? (
            <div className="text-center">
              <p className="mb-4 text-blue-100">
                Ready to grow your practice? Download the complete guide now.
              </p>
              <button
                onClick={handleDownload}
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download PDF Guide
              </button>
            </div>
          ) : (
            <div className="text-center">
              <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Download Started!</h4>
              <p className="text-blue-100 mb-4">Check your downloads folder for the PDF guide.</p>
              <button
                onClick={handleDownload}
                className="px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
              >
                Download Again
              </button>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center border-t pt-6">
          <p className="text-gray-600 mb-4">
            Want a personalized plan for your specific practice?
          </p>
          <Button variant="primary" href="https://themerlingroupworld.com/telehealth" target="_blank">
          Custom Plan for your Business
        </Button>
        </div>
      </div>
    </div>
  );
};

export default FileUploadDownload;