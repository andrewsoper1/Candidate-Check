// TODO: Create an interface for the Candidate objects returned by the API
export default interface Candidate {
    readonly name: string | null;
    readonly username: string | null;
    readonly location: string | null;
    readonly avatar: string | null;
    readonly email: string | null;
    readonly html_url: string | null;
    readonly bio: string | null;
}
