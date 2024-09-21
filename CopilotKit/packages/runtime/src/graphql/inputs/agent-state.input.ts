import { Field, InputType } from "type-graphql";

@InputType()
export class AgentStateInput {
  @Field(() => String)
  agentName: string;

  @Field(() => String)
  state: string;
}