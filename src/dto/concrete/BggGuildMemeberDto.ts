import { JsonAlias, JsonClassType, JsonProperty } from "jackson-js";

export class BggGuildMemberDto {
    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_name"] })
    name!: string;
}