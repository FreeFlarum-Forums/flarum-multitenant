<?php

/*
 * This file is part of fof/terms.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Terms\Serializers;

use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Settings\SettingsRepositoryInterface;
use FoF\Terms\Policy;

class PolicySerializer extends AbstractSerializer
{
    protected $type = 'fof-terms-policies';

    /**
     * @param Policy $model
     *
     * @return array
     */
    protected function getDefaultAttributes($model)
    {
        $attributes = $model->toArray();

        /**
         * @var $settings SettingsRepositoryInterface
         */
        $settings = app(SettingsRepositoryInterface::class);

        if ($settings->get('fof-terms.hide-updated-at')) {
            $attributes['terms_updated_at'] = null;
        } else {
            $attributes['terms_updated_at'] = $this->formatDate($model->terms_updated_at);
        }

        return $attributes;
    }
}
