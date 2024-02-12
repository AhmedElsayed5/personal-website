import "./Project.css";
export interface Props {
  name: string;
  description: string;
  url?: string;
  code: string;
  technology: string;
}
export const Project: React.FC<Props> = (info) => {
  return (
    <section className="project">
      <p className="project__description">{info?.name}</p>
      <p className="project__description">{info?.description}</p>
      {info?.url && (
        <a href={info?.url} rel="noreferrer" target="_blank">
          <p className="project__description">Link</p>{" "}
        </a>
      )}
      <a href={info?.code} rel="noreferrer" target="_blank">
        <p className="project__description">Code</p>
      </a>
      <p className="project__description">{info?.technology}</p>
    </section>
  );
};
