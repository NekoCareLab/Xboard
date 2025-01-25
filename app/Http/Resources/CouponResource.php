<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * 优惠券资源类
 *
 * @property array|null $limit_plan_ids 限制可用的套餐ID列表
 */
class CouponResource extends JsonResource
{
    /**
     * 将资源转换为数组
     *
     * @param Request $request 请求实例
     * @return array<string, mixed> 转换后的数组
     */
    public function toArray(Request $request): array
    {
        return [
            ...$this->resource->toArray(),
            'limit_plan_ids' => $this->when(
                !empty($this->limit_plan_ids),
                fn() => collect($this->limit_plan_ids)
                    ->map(fn(mixed $id): string => (string) $id)
                    ->values()
                    ->all()
            )
        ];
    }
}
