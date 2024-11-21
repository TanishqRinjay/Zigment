import React from "react";
import { useForm } from "react-hook-form";
import { FormSchema } from "../types/formSchema";

interface FormPreviewProps {
    schema: FormSchema;
}

const FormPreview: React.FC<FormPreviewProps> = ({ schema }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        const blob = new Blob([JSON.stringify(data, null, 2)], {
            type: "application/json",
        });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "form_submission.json";
        link.click();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <h1 className="text-2xl font-bold">{schema.formTitle}</h1>
            <p className="text-gray-600 dark:text-gray-300">
                {schema.formDescription}
            </p>
            {schema.fields.map((field) => (
                <div key={field.id}>
                    <label className="block font-medium mb-1">
                        {field.label}
                    </label>
                    {field.type === "text" || field.type === "email" ? (
                        <input
                            type={field.type}
                            placeholder={field.placeholder}
                            {...register(field.id, {
                                required: field.required
                                    ? `${field.label} is required`
                                    : false,
                                pattern: field.validation?.pattern
                                    ? {
                                          value: new RegExp(
                                              field.validation.pattern
                                          ),
                                          message:
                                              field.validation.message ||
                                              "Invalid pattern",
                                      }
                                    : undefined,
                            })}
                            className="w-full p-2 border rounded"
                        />
                    ) : field.type === "textarea" ? (
                        <textarea
                            placeholder={field.placeholder}
                            {...register(field.id, {
                                required: field.required,
                            })}
                            className="w-full p-2 border rounded"
                        />
                    ) : field.type === "select" ? (
                        <select
                            {...register(field.id, {
                                required: field.required,
                            })}
                            className="w-full p-2 border rounded"
                        >
                            {field.options?.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    ) : null}
                    {errors[field.id] && (
                        <p className="text-red-500 text-sm">
                            {errors[field.id]?.message as unknown as string}
                        </p>
                    )}
                </div>
            ))}
            <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded"
            >
                Submit and Download JSON
            </button>
        </form>
    );
};

export default FormPreview;
