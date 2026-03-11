
import { useState, useEffect, useRef } from "react";
import { Star, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function FeedbackSection() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [video, setVideo] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);
  const [success, setSuccess] = useState(false);
  const scrollRef = useRef(null);
  const [profileImage, setProfileImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);



  // 🟢 Fetch feedbacks from MongoDB when component loads
  useEffect(() => {
  const fetchFeedbacks = async () => {
    try {
      const res = await fetch("/api/feedback");

      if (!res.ok) {
        throw new Error("Failed to fetch feedbacks");
      }

      const data = await res.json();
      setFeedbacks(data);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    }
  };

  fetchFeedbacks();
}, []);


  // 🟢 Scroll function for arrows
  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = direction === "left" ? -400 : 400;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const uploadImage = async () => {
  if (!profileImage) return null;

  const formData = new FormData();
  formData.append("file", profileImage);
  formData.append("upload_preset", "xlent_feedback"); // Cloudinary preset

  // setUploading(true);

  try {
  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dggmcgqzd/image/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await res.json();

  if (!data.secure_url) {
    console.error("Cloudinary error:", data);
  throw new Error("Cloudinary upload failed");
}
  return data.secure_url;
} catch (err) {
    console.error("Upload image error:", err);
    return null;
  }
};


  // 🟢 Handle video upload
  // const handleVideoChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file && file.type.startsWith("video/")) {
  //     setVideo(URL.createObjectURL(file));
  //   } else {
  //     alert("Please upload a valid video file.");
  //   }
  // };

  // 🟢 Submit feedback and store in MongoDB
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
       setUploading(true);
       const imageUrl = await uploadImage();
       console.log("Uploaded Image URL:", imageUrl);

      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, rating, feedback, video, profileImage: imageUrl }),
      });

      if (res.ok) {
        const newFeedback = { name, rating, feedback, video, profileImage: imageUrl, date: new Date().toLocaleDateString() };
        setFeedbacks([newFeedback, ...feedbacks]);
        setSuccess(true);
        setName("");
        setRating(0);
        setHover(0);
        setFeedback("");
        setVideo(null);
        setProfileImage(null);
        
        if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

        setSuccess(true);
        setTimeout(() => setSuccess(false), 2000);
      } else {
        alert("Failed to save feedback!");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Something went wrong!");
    }
    finally {
    setUploading(false);
  }
  };

  return (
    <section className="w-full px-[12%] py-10 bg-no-repeat bg-center bg-[length:90%_auto]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-5xl mb-6 font-Ovo">Student Feedback</h2>
        <h3 className="text-3xl mb-3 font-Ovo">Excellent on Google</h3>
        {/* <p className="text-gray-950 mb-10">
          Rate your experience and share a review!
        </p> */}

        {/* <div className="flex items-center justify-center mb-10">
         <label className="cursor-pointer">
        <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
       className="hidden"
       onChange={(e) => setProfileImage(e.target.files[0])}
      />
      <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border">
         {profileImage ? (
           
           <img
             src={URL.createObjectURL(profileImage)}
             alt="profile preview"
             className="w-full h-full object-cover"
            />

         ) : (
          <span className="text-sm text-gray-600">Upload Photo</span>
          )}
         </div>
       </label>
      </div> */}


        {/* Feedback Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full p-3 rounded-lg bg-gray-100 focus:ring-2 focus:ring-yellow-400"
            required
          /> */}

          {/* Star Rating */}
          {/* <div className="flex justify-center space-x-2 mb-4">
            {[...Array(5)].map((_, i) => {
              const starValue = i + 1;
              return (
                <Star
                  key={i}
                  size={35}
                  onClick={() => setRating(starValue)}
                  onMouseEnter={() => setHover(starValue)}
                  onMouseLeave={() => setHover(0)}
                  className={`cursor-pointer transition ${
                    starValue <= (hover || rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-400"
                  }`}
                />
              );
            })}
          </div> */}

          {/* <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Write your feedback..."
            className="w-full p-3 rounded-lg bg-gray-100 focus:ring-2 focus:ring-yellow-400"
            rows={4}
            required
          /> */}

          {/* <div className="space-y-3">
            <label className="block font-medium">Upload your video feedback:</label>
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoChange}
              className="block w-full bg-gray-100 p-2 rounded-lg border border-gray-700 cursor-pointer"
            />
            {video && (
              <video controls className="w-full rounded-lg mt-3 border border-gray-700">
                <source src={video} type="video/mp4" />
              </video>
            )}
          </div> */}
          

          {/* <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 rounded-full text-black font-semibold py-2 px-6 transition"
          >
            Submit Feedback
          </button>

          {success && (
            <div className="flex justify-center items-center space-x-2 mt-3 text-green-500">
              <CheckCircle size={22} />
              <span>Feedback submitted successfully!</span>
            </div>
          )} */}
        </form>
      </div>

      {/* Display Feedbacks */}
      {feedbacks.length > 0 && (
        <div className="w-full max-w-6xl  w-s mx-auto relative mt-14 ">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow z-10"
          >
            {/* <ChevronLeft /> */}
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow z-10"
          >
            {/* <ChevronRight /> */}
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-6 scroll-smooth px-10 py-4 scrollbar-hide"
          >
            {feedbacks.map((fb, i) => (
              <div
                key={i}
                className=" min-w-[80px] sm:min-w-[80px] md:min-w-[130px] max-w-[300px] bg-white border border-gray-300 rounded-2xl shadow-md p-5 flex-shrink-0 transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center space-x-3">
                    {/* <img
                     src={fb.profileImage || "/default-avatar.png"}
                     alt={fb.name}
                     className="w-10 h-10 rounded-full object-cover border"
                    /> */}

                    <div>
                      <h4 className="font-semibold text-gray-900 text-base sm:text-lg">{fb.name}</h4>
                      {/* <p className="text-xs sm:text-sm text-gray-500">{fb.date}</p> */}
                    </div>
                  </div>
                  <img src="/google.svg" alt="Google" className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <div className="flex space-x-1 mb-2">
                  {[...Array(fb.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <hr></hr>

                <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-2 mt-2 break-words whitespace-pre-wrap">
                  {fb.feedback}
                </p>

                {/* {fb.video && (
                  <video controls className="w-full rounded-xl border border-gray-200">
                    <source src={fb.video} type="video/mp4" />
                  </video>
                )} */}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

