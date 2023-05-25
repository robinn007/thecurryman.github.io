type ExperienceProps = {
  companyUrl?: string;
  companyName: string;
  role: string;
  duration: string;
  description: string;
  stats?: string;
};
type ExperienceMiniProps = {
  companyName: string;
  role: string;
  stats?: string;
  link?: string;
};

export function ExperienceMini({
  companyName,
  role,
  stats,
  link,
}: ExperienceMiniProps) {
  return (
    <div className="flex">
      <div className="" style={{ width: "200px" }}>
        {link ? (
          <a href={link} target="_blank" rel="noreferer">
            {companyName}
          </a>
        ) : (
          <div>{companyName}</div>
        )}
      </div>

      <div className="w-full">
        <div className="w-full flex flex-col">
          <div className="w-full text-left ">{role}</div>
          {stats && <div className="text-gray-500">{stats}</div>}
        </div>
      </div>
      {/* <div className="w-full hidden"></div> */}
    </div>
  );
}

export function Experience({
  companyUrl,
  companyName,
  role,
  duration,
  description,
  stats,
}: ExperienceProps) {
  return (
    <div className=" border-black ">
      <p className="text-lg font-sans-serif text-gray-800 mb-0">
        {companyUrl ? (
          <a
            className="underline hover:opacity-70"
            target="_blank"
            href={companyUrl}
            rel="noreferrer"
          >
            {companyName}
          </a>
        ) : (
          companyName
        )}
      </p>
      <p className="text-md leading-6 text-gray-700 m-0">
        {role} | <span className="text-sm">{duration}</span>
      </p>
      <p className="text-md my-0 text-gray-700">{description}</p>
      {stats && (
        <p className="text-gray-700 m-0">
          <b>Stats:</b> {stats}
        </p>
      )}
    </div>
  );
}
