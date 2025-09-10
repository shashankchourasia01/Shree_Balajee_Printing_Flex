import { useEffect } from "react";

const VoiceAgent = () => {
  useEffect(() => {
    // Dynamically load the ElevenLabs script
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* ElevenLabs custom element */}
      <elevenlabs-convai agent-id="agent_0801k4tm0ap0evmrpnz4w2kddzfe"></elevenlabs-convai>
    </div>
  );
};

export default VoiceAgent;
