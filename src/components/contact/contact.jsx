import React from "react";
import { Element } from "react-scroll";
import { Typography, Button } from "@material-tailwind/react";

export const ContactUs = ({ data }) => {
  return (
    <>
      <Element name="contact"></Element>
      <section className="bg-white dark:bg-gray-900">
        <div 
        id="contact" 
        className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            {data.header}
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            {data.subtext}
          </p>
          <form action="https://submit-form.com/iNqz7kNy" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="flex items-center gap-1 font-medium mb-2 text-sm text-gray-900 dark:text-gray-300"
              >
                {data.email.title}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder={data.email.default}
                required
              ></input>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {data.subject.title}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder={data.subject.default}
                required
              ></input>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                {data.body.title}
              </label>
              <textarea
                id="message"
                name="body"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder={data.body.default}
              ></textarea>
            </div>

            <Button size="lg" type="submit" value="Send">
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};