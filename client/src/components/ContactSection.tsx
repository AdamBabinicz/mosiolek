import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const formSchema = z.object({
    name: z.string().min(2, { message: t("contact.errors.nameRequired") }),
    email: z.string().email({ message: t("contact.errors.emailInvalid") }),
    subject: z
      .string()
      .min(2, { message: t("contact.errors.subjectRequired") }),
    message: z
      .string()
      .min(10, { message: t("contact.errors.messageRequired") }),
    privacyPolicy: z.boolean().refine((val) => val === true, {
      message: t("contact.errors.privacyRequired"),
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      privacyPolicy: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // In a real app, you would send the data to a server here
      console.log("Form values:", values);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitSuccessful(true);
      form.reset();

      toast({
        title: t("contact.successToastTitle"),
        description: t("contact.successToastMessage"),
      });
    } catch (error) {
      toast({
        title: t("contact.errorToastTitle"),
        description: t("contact.errorToastMessage"),
        variant: "destructive",
      });
    }
  };

  return (
    <section id="kontakt" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-serif tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t("contact.title")}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            {t("contact.description")}
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {t("contact.form.name")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {t("contact.form.email")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {t("contact.form.subject")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {t("contact.form.message")}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={5}
                          className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="privacyPolicy"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm text-gray-700 dark:text-gray-300">
                          {t("contact.form.privacyPolicy")}{" "}
                          <a
                            href="#"
                            className="text-primary dark:text-blue-400 hover:underline"
                          >
                            {t("contact.form.privacyPolicyLink")}
                          </a>
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition"
                >
                  {form.formState.isSubmitting
                    ? t("contact.form.sending")
                    : t("contact.form.submit")}
                </Button>

                {isSubmitSuccessful && (
                  <div className="text-center text-green-600 dark:text-green-400">
                    {t("contact.form.successMessage")}
                  </div>
                )}
              </form>
            </Form>
          </div> */}

          <div className="mt-16 lg:mt-0">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 h-full">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                {t("contact.contactInfo.title")}
              </h3>
              <div className="mt-6 space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <i className="fas fa-envelope text-primary dark:text-blue-400"></i>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-900 dark:text-white">
                      {t("contact.contactInfo.emailLabel")}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t("contact.contactInfo.email")}
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <i className="fas fa-phone text-primary dark:text-blue-400"></i>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-900 dark:text-white">
                      {t("contact.contactInfo.phoneLabel")}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t("contact.contactInfo.phone")}
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <i className="fas fa-user text-primary dark:text-blue-400"></i>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-900 dark:text-white">
                      {t("contact.contactInfo.managerLabel")}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t("contact.contactInfo.manager")}
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-primary dark:text-blue-400"></i>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-900 dark:text-white">
                      {t("contact.contactInfo.addressLabel")}
                    </p>
                    <div
                      className="text-gray-600 dark:text-gray-300"
                      dangerouslySetInnerHTML={{
                        __html: t("contact.contactInfo.address"),
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  {t("contact.socialMedia.title")}
                </h3>
                <div className="mt-4 flex space-x-6">
                  <a
                    href="https://www.facebook.com/PAWELMOSIOLEK1976"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition"
                  >
                    <span className="sr-only">
                      {t("contact.socialMedia.facebook")}
                    </span>
                    <i className="fab fa-facebook-f text-2xl"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/pawelmosiolek/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition"
                  >
                    <span className="sr-only">
                      {t("contact.socialMedia.instagram")}
                    </span>
                    <i className="fab fa-instagram text-2xl"></i>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition"
                  >
                    <span className="sr-only">
                      {t("contact.socialMedia.youtube")}
                    </span>
                    <i className="fab fa-youtube text-2xl"></i>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition"
                  >
                    <span className="sr-only">
                      {t("contact.socialMedia.spotify")}
                    </span>
                    <i className="fab fa-spotify text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
