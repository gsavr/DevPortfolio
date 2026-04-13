import { useEffect, useState } from "react";
import { sendEmail } from "../services/emailjs-location";

interface LocationProps {
  email: string;
}

export const Location: React.FC<LocationProps> = ({ email }: LocationProps) => {
  //const [location, setLocation] = useState({ lat: NaN, lng: NaN });
  const [error, setError] = useState("");

  useEffect(() => {
    // 1. Check if Geolocation is supported
    if (!("geolocation" in navigator)) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    // 2. Define success callback
    const handleSuccess = async (position: {
      coords: { latitude: number; longitude: number };
    }) => {
      const { latitude, longitude } = position.coords;
      //setLocation({ lat: latitude, lng: longitude });
      console.log("Location shared -", "lat:", latitude, "long: ", longitude);
      // SEND LOCATION TO SERVER HERE

      await sendEmail(email, latitude, longitude);
    };

    // 3. Define error callback
    const handleError = (err: { code: any; message: any }) => {
      setError(`Error (${err.code}): ${err.message}`);
    };

    // 4. Options: High accuracy for mobile, cache for 1 minute
    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 60000,
    };

    // 5. Fire once on load
    navigator.geolocation.getCurrentPosition(
      handleSuccess,
      handleError,
      options,
    );
  }, [email]); // Empty array ensures this runs only once
  return error ? <p>{error}</p> : null;
};
