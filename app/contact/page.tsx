'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const CONTACT_LINKS = [
  {
    platform: 'Email',
    handle: 'kyrinkompi@gmail.com',
    icon: 'M17.187 19.181L24 4.755 0 12.386l9.196 1.963.043 4.896 2.759-2.617-2.147-2.076 7.336 4.63z',
  },
  {
    platform: 'Instagram',
    handle: 'param3thia',
    link: 'https://instagram.com/param3thia',
    icon: 'M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"',
  },
  {
    platform: 'Discord',
    handle: 'paramethia',
    icon: 'M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z',
  }
];

export default function Contact() {
  const [showCopied, setShowCopied] = useState(false);
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex justify-center items-center h-full">
      <div className="w-full max-w-xl text-center md:text-start space-y-6 max-w-2xl relative mx-4 md:mx-0">
        {showCopied && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="absolute -top-8 right-0 px-4 py-2 bg-gray-700/10 rounded-lg text-sm text-gray-600 dark:text-gray-400">
            Copied to clipboard!
          </motion.div>
        )}
        
        <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="text-5xl font-bold">
          Contact
        </motion.h1>

        <motion.p initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }} className="text-xl text-gray-600 dark:text-gray-400">
          Here's how you can reach me
        </motion.p>

        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }} className="space-y-4 w-full">
          {CONTACT_LINKS.map((link) => (
            <div key={link.platform} className="p-6 border border-gray-700/20 rounded-xl backdrop-blur-sm hover:border-gray-700/50 transition-colors duration-300 w-full flex justify-between items-center" onMouseOver={() => { setHoveredPlatform(link.platform) }} onMouseOut={() => { setHoveredPlatform(null) }}
              onClick={() => { 
                if (link.platform === "Instagram") {
                  window.open(link.link, '_blank')
                } else {
                  copyToClipboard(link.handle);
                }
              }}
            >
              <div className="flex items-center gap-4">
                <svg className={`w-6 h-6 ${ hoveredPlatform === link.platform ? "text-gray-700" : "text-gray-300"}`} viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d={link.icon} />
                </svg>
                <div className="text-left">
                  <h2 className={`text-xl ${ hoveredPlatform === link.platform ? "text-gray-700" : ""} font-semibold`}>{link.platform}</h2>
                  <p className="text-gray-600 dark:text-gray-400">{link.handle}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 ml-4">Click it</p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
} 