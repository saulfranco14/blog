import BlogPost from "./BlogPost";

export default function Cards({ data }) {
  return (
    <div className="bg-white py-12 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Lee y crea contenido en el blog de Grupo Promass
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {data.map((post, index) => (
              <BlogPost key={index} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
