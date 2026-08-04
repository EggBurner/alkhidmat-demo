import Image from 'next/image';
import React from 'react';

const ContactForum = () => {
  return (
    <div className="px-5 py-12 lg:px-10">
      <h2 className="text-xl font-medium">Send us a Message</h2>
      <h3 className="w-[60%] py-3 text-sm text-[#6A7282]">
        Fill out the form below and we&apos;ll get back to you within 24 hours.
      </h3>

      <form className="mt-8">
        <div className="flex flex-col gap-6 lg:flex-row">
          <input
            id="fname"
            name="fname"
            placeholder="First Name"
            className="rounded-sm border border-[#F0F1F3] bg-[#F9FAFB] px-3 py-2"
          />
          <input
            id="lname"
            name="lname"
            placeholder="Last Name"
            className="rounded-sm border border-[#F0F1F3] bg-[#F9FAFB] px-3 py-2"
          />
        </div>
        <div className="flex flex-col gap-6 pt-6 lg:flex-row">
          <input
            id="phone"
            name="phone"
            placeholder="Phone"
            className="rounded-sm border border-[#F0F1F3] bg-[#F9FAFB] px-3 py-2"
          />
          <input
            id="Email"
            name="email"
            placeholder="Email"
            className="rounded-sm border border-[#F0F1F3] bg-[#F9FAFB] px-3 py-2"
          />
        </div>
        <textarea
          id="desc"
          name="desc"
          placeholder="How can we help?"
          className="mt-6 h-32 w-full resize-none rounded-sm border border-[#F0F1F3] bg-[#F9FAFB] px-3 py-2"
        />
        <button className="mt-6 flex w-full justify-center gap-2 rounded-full bg-[#2D8E84] py-3 shadow-lg">
          <p className="text-lg text-white">Send Message</p>
          <Image
            alt="send icon"
            src={'/message-icon.svg'}
            width={20}
            height={20}
            className="h-auto w-4"
            unoptimized
          />
        </button>
      </form>
    </div>
  );
};

export default ContactForum;
