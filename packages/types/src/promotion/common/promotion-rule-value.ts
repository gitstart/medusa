import { BaseFilterable } from "../../dal"
import { PromotionRuleDTO } from "./promotion-rule"

export interface PromotionRuleValueDTO {
  id: string
}

export interface CreatePromotionRuleValueDTO {
  value: any
  promotion_rule: PromotionRuleDTO
}

export interface UpdatePromotionRuleValueDTO {
  id: string
}

export interface FilterablePromotionRuleValueProps
  extends BaseFilterable<FilterablePromotionRuleValueProps> {
  id?: string[]
}
